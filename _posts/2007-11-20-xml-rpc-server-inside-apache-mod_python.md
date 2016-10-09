---
layout: post
title: "XML RPC server inside apache mod_python"
---
XML RPC server inside apache mod_python
===
Writing XML RPC server and client in python is extremely easy. There are many examples. [xmlrpclib][0] is part of python, so writing client doesn't need anything extra. There are many examples of XMLRPC server as well. I used [Julien Oster's][1].  
  
The problem comes when you want to use XML RPC server in a production environment alongside your apache web server. If you are not a big shop then you very likely want to host both of them on same machine. Then two different servers can't listen for HTTP on same port. You might use an alternate port (second in popularity to port 80), but the users behind corporate firewall will suffer. If you understand the protocol stack, you would know it shouldn't be difficult to run the XMLRPC server inside an apache server. I realized that last weekend, and in couple of hours I hosted Julien Oster's XML RPC server inside my apache mod\_python framework.  
  
[Download][1] the XML RPC server. You will find a single file xmlrpcserver.py.  
  
You will find a class XmlRpcServer in it. That's all you need. Add following method to it:  

    **    def handle(self,req):  
    **        length = int(req.headers_in["Content-length"])  
      
         request_string = req.read(length)  
         request = StringIO(request_string)  
      
         request.seek(0)  
         response = StringIO()  
      
         **try**:  
             self.execute(request, response, None)  
         **except** Exception, e:  
      
             **return** apache.HTTP_INTERNAL_SERVER_ERROR  
         **finally**:  
            response.seek(0)  
      
            rstr = response.read()  
            req.headers_out['Content-type'] = 'text/xml'  
      
            req.headers_out['Content-length'] = "%d"%len(rstr)  
      
            req.write(rstr)  
            **return** apache.OK   
    

  
Now host the following code in your index.py file (or any python file you have configured as PythonHandler in your apache settings)  

      
    **from** mod_python **import** apache  
      
    **from** xmlrpcserver **import** XmlRpcServer  
       
    **def handler(req)**:  
      
     **try**:  
         xmlserver = XmlRpcServer()  
         app = Application()  
      
         xmlserver.register_class('app',app)  
               
         result = xmlserver.handle(req)  
      
         **return** result  
     **except** Exception, e:  
         **return** apache.HTTP_INTERNAL_SERVER_ERROR  
      
    # The following class is where you can put your application logic  
    **class** Application:  
    **    def __init__(self):  
    **        **pass**  
      
    **    def getName(self):  
    **        **return** 'example'  
    

  
Once you save the above index.py to your webserver, you can use a python client to invoke XMLRPC calls to your apache server.  
  
Assuming you saved above file to $(DOCROOT)/xmlrpc/index.py, your client code would look like this:  

    **import** xmlrpclib  
      
    remote = xmlrpclib.Server('http://yourserver.com/xmlrpc/')  
    name = remote.app.getName()  
    

  
  
And you are all set!  
  
syntax highlighted by [Code2HTML][2]

[0]: http://docs.python.org/lib/module-xmlrpclib.html
[1]: http://www.julien-oster.de/projects/xmlrpcserver/
[2]: http://www.palfrader.org/code2html

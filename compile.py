import os

os.system("git clone http://github.com/godotengine/godot")

os.system("pip install scons")

os.system("cd godot")

os.system("ln -s /usr/lib/x86_64-linux-gnu/libXcursor.so.1 /usr/lib/libXcursor.so.1")
os.system("ln -s /usr/lib/x86_64-linux-gnu/libXcursor.so.1.0.2 /usr/lib/libXcursor.so.1.0.2")

os.system("scons p=server")

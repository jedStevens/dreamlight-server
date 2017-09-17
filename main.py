# Import system modules
import sys, os

tarball = os.path.join(os.path.dirname(os.path.realpath(__file__)), "server.tar.gz")

os.system("cp " + tarball + " " + tarball + ".old")
os.system("tar -zxvf " + tarball)

os.system("mv " + tarball + ".old " + tarball)

server = os.path.join(os.path.dirname(os.path.realpath(__file__)), "heroku_server.sh")

os.system("chmod +x "+server)
os.system(server)

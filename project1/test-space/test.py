import json
import webbrowser

x=input("Eneter your pokemon:")

webbrowser.open("https://s3.amazonaws.com/pokebucket-project/"+x+".png") 
import sys
import numpy as np 
import tensorflow as tf 
from random import uniform
dayNumber=int(sys.argv[1])
x = list(sys.argv[2].split(","))
y=list(sys.argv[3].split(","))
asd=list(sys.argv[4].split(","))
#print(x)
for z in range(len(x)-1):
  x[z]=float(x[z+1])-float(x[z])
x.pop(len(x)-1)
#print("x   =   ",x)
sun=[] #0
mon=[] #1
tue=[] #2
wed=[] #3
thu=[] #4
fri=[] #5
sat=[] #6
days=[sun,mon,tue,wed,thu,fri,sat]
i=dayNumber

while len(x)!=0:
  days[i].append(x[len(x)-1])
  if i==-1:
    i=6
  i=i-1
  x.pop(len(x)-1)
# days[dayNumber].append(x[len(x)-1])
dayAvg=[]
#print(days)
for k in range(0,7):
  sum=0
  size=len(days[k])
  #print("size = ",size)
  while len(days[k])!=0:
    sum=float(sum)+float(days[k][len(days[k])-1])
    days[k].pop(len(days[k])-1)
  if size!=0:
    dayAvg.append(sum/size)
  else :
    dayAvg.append(0)
b=0
temp=[]
#print(dayAvg)
#print(asd)
temp2=[]
while len(dayAvg)!=0:
  temp.append(float(dayAvg[b])-float(float(asd[1])-float(asd[0])))
  temp2.append(dayAvg[b])
  dayAvg.pop(b)
futureRate=[]
h=dayNumber+1
for g in range(32):
  if h==6:
    h=0
  h=h+1
  futureRate.append(abs(uniform((-1*abs(temp[h])+temp2[h]),(abs(temp[h])+temp2[h]))))
  #futureRate.append(uniform(1,8))
print(futureRate)
sys.stdout.flush()



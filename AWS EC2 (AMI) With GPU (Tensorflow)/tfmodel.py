import sys
import numpy as np 
import tensorflow as tf 
x=list(sys.argv[3].split(","))
y=list(sys.argv[2].split(","))
daysleft=int(sys.argv[1])
for i in range(len(x)):
  x[i]=float(x[i])
  y[i]=float(y[i])

pre=np.arange(1,daysleft+1)
#print("x=",x," y=",y)
n = len(x)
X = tf.placeholder("float") 
Y = tf.placeholder("float") 
W = tf.Variable(np.random.randn(), name = "W") 
b = tf.Variable(np.random.randn(), name = "b") 
learning_rate = 0.01
training_epochs = 1000
y_pred = tf.add(tf.multiply(X, W), b) 

cost = tf.reduce_sum(tf.pow(y_pred-Y, 2)) / (2 * n) 

# Gradient Descent Optimizer 
optimizer = tf.train.GradientDescentOptimizer(learning_rate).minimize(cost) 

init = tf.global_variables_initializer() 

with tf.Session() as sess: 
  
	sess.run(init) 
  
	for epoch in range(training_epochs): 
    
		for (_x, _y) in zip(x, y): 
			sess.run(optimizer, feed_dict = {X : _x, Y : _y}) 
		if (epoch + 1) % 50 == 0: 
			c = sess.run(cost, feed_dict = {X : x, Y : y}) 
			# print("Epoch", (epoch + 1), ": cost =", c, "W =", sess.run(W), "b =", sess.run(b)) 
	
	training_cost = sess.run(cost, feed_dict ={X: x, Y: y}) 
	weight = sess.run(W) 
	bias = sess.run(b)
predictions=[]
for j in range(daysleft):
  predictions.append(weight * pre[j] + bias)

print(predictions)
sys.stdout.flush()



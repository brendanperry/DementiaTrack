# DementiaTrack

***Senior Capstone Project 2020-2021***



## Problem Statement

As a team, we want to correlate the symptoms of dementia to data, by researching said symptoms and the data that pertains to each symptom, to then be analyzed by Artificial Intelligence (AI). Once all symptoms are mapped to data that can be analyzed by AI, we will implement a prototype system to cover the collection of data. This data will pertain to said symptoms to the best of our ability given the availability of sensor technology at this time. The prototype system will then be used to advance the tracking of the early onset of dementia in a patient and develop an efficient alert system to notify if the progression is worsening. Once the system is in place, we hope to pursue publication of our work.



## Project Overview

The resulting system is a web app built with Django and React. Each symptom has its own web page where different scenarios can be run (normal, random, and abnormal data). The results are displayed with data and graphs. There is also an overview section that runs them all at once and determines if a notification needs to be sent to a guardian. The following image shows the top part of the page and one of the symptoms.



![Bathroom Trips](/documents/normal/overview-page.PNG)



## My Contribution

I was responsible for research, development, and presentations for this project along with three other team members. The work was split up by dementia symptom that we were studying. I spent my time researching on the symptom Urinary Tract Infection. UTIs are seen at increased rates among people suffering from dementia. My goal was to find a way to detect if a UTI was occurring using only non-intrusive smart home sensors and AI algorithms. 



There are two symptoms of Urinary Tract Infections that were feasible to track in this manner. These two are the number of bathroom trips that the individual is making (day and night) as well as their body temperature. 



Given the time limitations of the project (2 semesters), the goal was simply to implement an untested prototype system using a mixture of open-source datasets and mock data based on real world situations.



## Bathroom Trips

A person suffering from a UTI will likely use the bathroom more often. This could be tracked using location with a wrist band for example. My goal was to implement an algorithm that could detect anomalies in the number of bathroom trips a person takes over time, and present the information in a graphical form. 



![Bathroom Trips](/documents/abnormal/trips.PNG)



This was done using the PyCaret machine learning library with the algorithm Local Outlier Factor.



## Body Temperature

Any infection has a chance to increase a person's body temperature. Tracking this could be done with a wrist band also. The goal was very similar for body temperature. I wanted to find anomalies in the data set.



![Bathroom Trips](/documents/abnormal/temp.PNG)



This was done using the ADTK anomaly detection library with the algorithm Inner Quartile Range. 



Both of the algorithms were chosen for several reasons. 

1. They are available in Python.

2. They are unsupervised. (very important because we did not have training data)

3. Trial and error showed them to be effective.



## Decision Making

One of the main challenges that I faced was determining at what point it would be worth raising awareness to a guardian. This type of decision-making was a challenge for each symptom as well as for all the symptoms combined. Together, we used a very simple system to complete our prototype that just checks if more than one symptom is detecting abnormal behavior. For UTI though, I have two smaller symptoms within that I had to balance. There are two key cases that I was looking for. 
1. A large spike in bathroom trips.

2. A spike in bathroom trips and body temperature at the same time.



Both of these could be caused by things other than a UTI, but this is worked around due to the other symptom detection happening at the same time. Future project work plans also will likely include more symptoms to help balance things out.



Here is an example of a case where the bathroom trips and body temperature anomalies overlap on the 21st.



![Bathroom Trips](/documents/abnormal/all.PNG)



## Notification System

One of the other main components that I worked on, with some help from others also, was the notification system. This was put in place to send an email to the guardian in the case that multiple symptoms were reported to have abnormal behavior. 



![Bathroom Trips](/documents/abnormal/email.PNG)



## Conclusion

I learned a lot of things from this project. I got out of my comfort zone, and presented in front of classmates, professors, and businesses in Fort Wayne. I got lots of practice with Python, building out APIs, and using React to build UIs. I got more experience on this team using scrum and agile methods. I learned more about machine learning, reading research papers, and condensing down information into a consumable format through tables and graphs. 

Overall, it was a great learning experience and a really interesting project that I hope to see improved by future capstone groups.



## More

View the documents folder to see our project documentation, more images, and our final poster. 

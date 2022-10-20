#start by using an amazon linux image
FROM amazonlinux:2


#install python
RUN yum install -y python37 && \
    yum install -y python3-pip && \
    yum install -y zip && \
    yum clean all

#set up pip and Venv
RUN python3.7 -m pip install --upgrade pip && \
    python3.7 -m pip install virtualenv
RUN python3.7 -m venv base
RUN source base/bin/activate

#install deps
COPY ./requirements.txt .
RUN pip install -r requirements.txt -t ./python

#zip it up for deplyoment
RUN zip -r layer.zip ./python/
ENTRYPOINT ["/bin/bash", "-l"]

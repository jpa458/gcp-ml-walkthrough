FROM openjdk:8
RUN apt-get update
RUN apt-get install -y maven
RUN git clone https://github.com/jpa458/gcp-ml-walkthrough.git
WORKDIR gcp-ml-walkthrough/streaming-client
CMD ["mvn", "clean", "jetty:run"]

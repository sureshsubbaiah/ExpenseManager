FROM centos

# adding name server for package installations.
RUN sh -c "echo nameserver 8.8.8.8 > /etc/resolv.conf"

# Upgrading system
RUN yum -y upgrade
RUN yum -y install wget
# Downloading & Config Java 8
RUN yum install java-1.8.0-openjdk-devel -y

EXPOSE 8080

#install Spring Boot artifact
VOLUME /tmp
ADD ./build/libs/ExpenseManagerAPI-0.0.1-SNAPSHOT.jar ExpenseManager.jar
RUN sh -c 'touch /ExpenseManager.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/ExpenseManager.jar"]
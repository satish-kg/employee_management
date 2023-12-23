# FROM eclipse-temurin:17-jdk-alpine
# VOLUME /tmp
# ARG JAR_FILE
# COPY ${JAR_FILE} app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]


# Build Stage
# FROM maven:3.8.3-openjdk-17 AS build
# COPY src /home/app/src
# COPY pom.xml /home/app
# RUN mvn -f /home/app/pom.xml clean package
# EXPOSE 8080
# ENTRYPOINT ["java","-jar","/home/app/target/spring_rest_docker.jar"]


FROM openjdk:17-jdk
COPY target/employee_management.jar .
EXPOSE 6969
ENTRYPOINT ["java", "-jar", "employee_management.jar"]


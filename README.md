## Getting Started

### Java

Ensure you have Java installed and available with `java --version`

### Dependencies

Install the project dependencies with `npm install --force`

### Running Fitnesse

This project uses Fitnesse, a wiki web server used for hosting and writing acceptance tests in the FIT framework style.

Fitnesse can be launched by executing the standalone jar:

``java -jar acceptance/fitnesse/fitnesse-standalone.jar -d acceptance/fitnesse/``

You can now access the local wiki instance using a browser at ``http://localhost/``
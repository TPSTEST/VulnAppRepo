
#include <iostream>
#include <cstring>
#include <cstdlib>

void vulnerableFunction(char *input) {
    char buffer[50];
    strcpy(buffer, input); // buffer overflow
    std::cout << "You entered: " << buffer << std::endl;
}

void runCommand(char *userCommand) {
    char command[100];
    sprintf(command, "ls %s", userCommand); // command injection
    system(command);
}

int main(int argc, char *argv[]) {
    if (argc > 1) {
        vulnerableFunction(argv[1]);
        runCommand(argv[1]);
    } else {
        std::cout << "Please provide input." << std::endl;
    }
    return 0;
}

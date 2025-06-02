#include <iostream>
#include <cstring>
#include "utils.h"

int main() {
    char name[20];
    char command[100];

    std::cout << "Enter your name: ";
    std::cin >> name;

    // Buffer overflow if input > 20 characters
    greetUser(name);

    std::cout << "Enter a file to list: ";
    std::cin >> command;

    // Command injection vulnerability
    char cmd[150];
    snprintf(cmd, sizeof(cmd), "ls -l %s", command);
    system(cmd);

    return 0;
}

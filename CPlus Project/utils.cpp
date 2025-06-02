
#include <iostream>
#include <cstring>

void greetUser(const char* name) {
    char buffer[50];
    // Potential buffer overflow if name > 50 chars
    strcpy(buffer, name);
    std::cout << "Hello, " << buffer << "!" << std::endl;
}

char* getSecretKey() {
    char *secret = new char[64];
    strcpy(secret, "HARDCODED_SECRET_KEY_123456789"); // hardcoded secret + memory leak
    return secret;
}

void printKey() {
    char *key = getSecretKey();
    std::cout << "Secret Key: " << key << std::endl;
    // Memory not freed (leak)
}

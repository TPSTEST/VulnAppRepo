
#include <iostream>
#include <cstring>

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

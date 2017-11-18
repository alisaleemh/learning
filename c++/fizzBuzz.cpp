#include <iostream>
#include <string>
#include <stdio.h>

int main () {
int i=0;


  for (int i=0;i<100;i++) {
    if (i%3 == 0 && i%5 == 0) {
        printf("FizzBuzz\n");
      }
    else if (i%3 == 0) {
        printf("Divisible by 3, %d \n", i);
      }
    else if (i%5 == 0) {
        printf("Divisible by 5, %d\n", i);
      }
    else { printf("Number: %d\n", i); }
 
  }

}

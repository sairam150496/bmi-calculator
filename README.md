# bmi-calculator

BMI calculator is a tool that calculates the BMI for the given height(cms) and weight(kgs). It also calculates the health risk and the weight category.
We also can get list of over weighted, obase, under weighted, very obase, etc information by just calling a funtion.

This is very adhere solution, with just O(n) we can get the necessary information.

## Configurations

### Configuring weights and their upper and lower limits

we can configure the BMI's in weightConfuguration.ts file
Eg: ![image](https://user-images.githubusercontent.com/50438335/119133006-04c7f100-ba59-11eb-87b4-5576a40e5fab.png)

### Passing test data
we can pass the data to test the api, it's pretty simple, we can copy and paste array of objects directly into the data.
Eg: ![image](https://user-images.githubusercontent.com/50438335/119133301-5a9c9900-ba59-11eb-939a-33389c2cc44f.png)


# Run Commands
```
npm install
npm install -g ts-node
npm run start ( to run the code)
npm run test (to run tests and the coverage)
```

# OutPut images
## Response for Overweighted people
![image](https://user-images.githubusercontent.com/50438335/119132106-e9101b00-ba57-11eb-9877-79c5ac2d27ce.png)
## Response for Moderately Obased people
![image](https://user-images.githubusercontent.com/50438335/119132477-5fad1880-ba58-11eb-8add-7f1af1450645.png)

# Test Coverage
![image](https://user-images.githubusercontent.com/50438335/119132628-91be7a80-ba58-11eb-9b96-8f9aa6096229.png)


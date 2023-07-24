public class sample {
    public static void main(String[] args) {
        // Primitive data types
        byte age = 25;
        short numberOfEmployees = 500;
        int population = 1000000;
        long worldPopulation = 7800000000L; // 'L' is appended to indicate a long literal

        float pi = 3.14f; // 'f' is appended to indicate a float literal
        double salary = 5000.50;

        boolean isJavaFun = true;
        char grade = 'A';

        System.out.println("Age: " + age);
        System.out.println("Number of Employees: " + numberOfEmployees);
        System.out.println("Population: " + population);
        System.out.println("World Population: " + worldPopulation);
        System.out.println("Pi: " + pi);
        System.out.println("Salary: " + salary);
        System.out.println("Is Java Fun? " + isJavaFun);
        System.out.println("Grade: " + grade);

        // Reference data types
        String name = "John Doe";
        int[] numbers = {1, 2, 3, 4, 5};
        Object obj = new Object();

        System.out.println("Name: " + name);
        System.out.println("Numbers: " + Arrays.toString(numbers));
        System.out.println("Object: " + obj);}
}

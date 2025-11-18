# What is the use of the keyof keyword in TypeScript? Provide an example. 
কোনো অবজেক্টের এর key গুলাকে টাইপ হিসাবে ব্যবহার করার জন্য keyof ব্যবহার করা হয় । এটি অবজেক্টের key গুলাকে একটি ইউনিক টাইপ হিসাবে রূপান্তরিত করে, যা কোড লিখতে সাহায্য করে এবং কোড গুলা বার বার বাবহারের উপযোগী করে তোলে। 
১। অবজেক্টের এর key গুলাকে টাইপে রূপান্তরিত করে।
২। generic function এর validation বাড়াতে সাহায্য করে।
৩। সঠিক property access এ সাহায্য করে।

উদাহর:

type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonInfo = keyof User;

এখানে PersonInfo শুধুমাত্র name, অথবা  age, অথবা  email বাতিত অন্য কোন property নিতে পারবে না।

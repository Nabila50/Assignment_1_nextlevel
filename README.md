# 1. What are some differences between interfaces and types in TypeScript?

Interface এবং Type উভয়ই কাস্টম টাইপ তৈরি করতে ব্যবহৃত হয়। তাদের মধ্যে কিছু পার্থক্য রয়েছে:

১। Interface একই নাম একের বেশি ব্যবহার করা হলে সেগুলোকে merge করতে পারে। অন্য দিকে টাইপ একের বেশি নাম ব্যবহার করলে তা merge করতে পারে না।

২। Interface এ extend করা সহজ Type এর তুলনায়। Type এ extend করা যায় কিন্তু & এর সাহায্যে।

৩। Type, Interface এর তুলনায় বেশি flexible। Type দিয়ে union, tuple, primitive, function সব define করা যায়। 

৪। Interface object model, class এর structure define করতে ব্যবহার করা হয়। অন্য দিকে complex composition এর জন্য Type best.

# 2. What is the use of the keyof keyword in TypeScript? Provide an example. 
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

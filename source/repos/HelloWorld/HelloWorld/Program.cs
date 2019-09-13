using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World");
            //Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
            //Console.WriteLine("{0} {1}", float.MinValue, float.MaxValue);
            //const float Pi = 3.14f;

            int i = 1000;
            byte b = (byte) i;
            Console.WriteLine(b);

            string number = "1224";
            int a = Convert.ToInt32(number);
            byte b1 = Convert.ToByte(number);
            Console.WriteLine(a);
            Console.WriteLine(b1);
        }
    }
}

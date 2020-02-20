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
    
            //int a = Convert.ToInt32(number);

            try
            {
                /*string number = "1224";
                byte b1 = Convert.ToByte(number);
                Console.WriteLine(b1);*/
                string str = "true";
                bool b1 = Convert.ToBoolean(str);
                Console.WriteLine(b1);
            }
            catch (Exception)
            {
                Console.WriteLine("The number could not be converted to a byte");

                //throw;
            }

            //Console.WriteLine(a);
            var dateTime = new DateTime(2018, 11, 08);
            var now = DateTime.Now;
            var today = DateTime.Today;

            //Console.WriteLine("Hour: "+now.Hour);
            //Console.WriteLine("Minute: " + now.Minute);

            var tomorrow = now.AddDays(1);
            var yesterday = now.AddDays(-1);

            Console.WriteLine(now.ToLongDateString());
            Console.WriteLine(now.ToShortDateString());
            Console.WriteLine(now.ToLongTimeString());
            Console.WriteLine(now.ToShortTimeString());
            Console.WriteLine(now.ToString("yyyy-MM-dd HH:mm"));

            //Creating TimeSpan objects
            var timeSpan = new TimeSpan(1, 2, 3);
            var ts1 = new TimeSpan(1, 0, 0);
            var ts2 = TimeSpan.FromHours(1);

            var start = DateTime.Now;
            var end = DateTime.Now.AddMinutes(2);

            Console.WriteLine(end-start);

            //Properties
            Console.WriteLine("Minutes: "+timeSpan.Minutes);
            Console.WriteLine("Total Minutes: " + timeSpan.TotalMinutes);

            //Modify
            Console.WriteLine("Add: " + timeSpan.Add(TimeSpan.FromMinutes(9)));
            Console.WriteLine("Add: " + timeSpan.Subtract(TimeSpan.FromMinutes(3)));

            Console.WriteLine(TimeSpan.Parse("12:09:34"));
        }
    }
}

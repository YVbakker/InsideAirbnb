using System.Globalization;

namespace InsideAirbnb.Utils;

public static class PriceParser
{
    public static decimal Parse(string price)
    {
        decimal parsedPrice;
        try
        {
            parsedPrice = decimal.Parse(price, NumberStyles.Currency);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            Console.WriteLine(price);
            throw;
        }

        return parsedPrice;
    }
}
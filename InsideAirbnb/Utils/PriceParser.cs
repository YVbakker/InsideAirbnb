using System.Globalization;

namespace InsideAirbnb.Utils;

public static class PriceParser
{
    private static NumberFormatInfo FormatInfo { get; set; }

    static PriceParser()
    {
        FormatInfo = new NumberFormatInfo
        {
            CurrencySymbol = "$"
        };
    }

    public static decimal Parse(string price)
    {
        decimal parsedPrice;
        try
        {
            parsedPrice = decimal.Parse(price, NumberStyles.Currency, FormatInfo);
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return parsedPrice;
    }
}
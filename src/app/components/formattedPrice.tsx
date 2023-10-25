import { formatCurrencyString } from "use-shopping-cart";

interface FormatCurrencyStringPriceProps {
  value: number,
  currency: string,
}

export default function formattedPrice({ value, currency }: FormatCurrencyStringPriceProps) {
  const formatCurrencyStringPrice = formatCurrencyString({
    value,
    currency,
  })
  
  return formatCurrencyStringPrice
}


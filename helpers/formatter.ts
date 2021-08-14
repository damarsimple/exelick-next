export const formatCurrency = (e: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    e
  );

export const wildCardFormatter = (e: string) => "%" + e + "%";

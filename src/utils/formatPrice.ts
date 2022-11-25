const formatPrice = (price: number) => {
    const priceFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price / 100); // ajustar os centavos
    return priceFormatted;
};

export default formatPrice;

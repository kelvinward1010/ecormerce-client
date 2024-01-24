

export const handleTotalPrice = (data: any[]) => {
    let total: number = 0;

    data?.forEach((item: any) => {
        total += Number(item.price) * Number(item.quantity);
    })

    return total;
}
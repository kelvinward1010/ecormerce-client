

export const handleTotalPrice = (data: any[]) => {
    let total: number = 0;

    data?.forEach((item: any) => {
        total += Number(item.price) * Number(item.quantity);
    })

    return total;
}

export const handleTakeId = (data: any[]) => {
    let array: string[] = [];

    data?.forEach((item: any) => {
        array?.push(item?.id)
    })

    return array;
}
function toThousands(str) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let useIdCounter = () => useState('id_counter', () => 0)

export default () => {
    let id_counter = useIdCounter()
    id_counter.value += 1
    return '#' + id_counter.value
}
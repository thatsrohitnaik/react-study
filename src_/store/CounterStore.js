import { action, observable } from 'mobx';

class CounterStore {
    @observable counter = 0;
    @observable details = { to: "rohit", from: "rohan", message: "How Are You!!" };

    @action.bound
    incCount() {
        this.counter += 1;
    }

    @action.bound
    decCount() {
        this.counter -= 1;
    }

    @action.bound
    resetCount() {
        this.counter = 0;
    }
}

export default CounterStore;
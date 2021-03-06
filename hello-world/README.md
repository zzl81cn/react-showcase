# Demo

## props&state

* [https://segmentfault.com/q/1010000002958539](https://segmentfault.com/q/1010000002958539)
* 需要理解的是，props是一个父组件传递给子组件的数据流，这个数据流可以一直传递到子孙组件。而state代表的是一个组件内部自身的状态（可以是父组件、子孙组件）。
* 改变一个组件自身状态，从语义上来说，就是这个组件内部已经发生变化，有可能需要对此组件以及组件所包含的子孙组件进行重渲染。
* 而props是父组件传递的参数，可以被用于显示内容，或者用于此组件自身状态的设置（部分props可以用来设置组件的state），不仅仅是组件内部state改变才会导致重渲染，父组件传递的props发生变化，也会执行。
* 既然两者的变化都有可能导致组件重渲染，所以只有理解props与state的意义，才能很好地决定到底什么时候用props或state。
* 例如：props和state都是用于描述component状态的，并且这个状态应该是与显示相关的。
* State 如果component的某些状态需要被改变，并且会影响到component的render，那么这些状态就应该用state表示。 例如：一个购物车的component，会根据用户在购物车中添加的产品和产品数量，显示不同的价格，那么“总价”这个状态，就应该用state表示。
* Props 如果component的某些状态由外部所决定，并且会影响到component的render，那么这些状态就应该用props表示。 例如：一个下拉菜单的component，有哪些菜单项，是由这个component的使用者和使用场景决定的，那么“菜单项”这个状态，就应该用props表示，并且由外部传入。
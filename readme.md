# Awesome Num Animation

Simple scroll, for animating numbers when scrolling down the page. Made mainly for JS traning purpose, but if you like it, feel free to use it any project you want!

Check the [demo](https://maciekgrzybek.github.io/awesome-num-animation/).


## Installation and usage

### Add script to your project:

```sh
<script src="awesome-num-animation.js"></script>
```

### Call the function with element you want to animate :

```sh
<script>
	 awesomeNumAnimation('#target-1');
</script>
```

### Options:

```sh
<script>
	awesomeNumAnimation('#target-2', {
		startNumber : 20,
		maxNumber : 300,
		duration : 4000,
		reveal : 50
	});
</script>
```
Those are the default values: 

```sh
startNumber : 0, 
maxNumber : 100,
duration : 2000,
reveal : 150
```


# Reproducing the bug

For now, I haven't been able to mock my API so I've exported all my API calls to be easily served by a local server..

```console
$ # Create a local server on port 8000
$ cd api_calls && python3 -m http.server
```

On another console:
```console
$ ember serve  --proxy=http://127.0.0.1:8000/
```

Then navigate to ``http://localhost:4200/2bc84504-dea0-4dc2-ae18-b49d096ac224``.

<img width="422" alt="capture d ecran 2017-07-30 a 17 59 43" src="https://user-images.githubusercontent.com/1457576/28754997-9de3b7c6-7551-11e7-97f6-22dc50df0660.png">


Open the Inspector, on the Data tab
<img width="632" alt="capture d ecran 2017-07-30 a 18 00 21" src="https://user-images.githubusercontent.com/1457576/28754996-9de3bc76-7551-11e7-9134-d05f1d1e2d90.png">


When you select "singer-part", its content is blank, despites icon saying `(9)`
<img width="752" alt="capture d ecran 2017-07-30 a 18 00 29" src="https://user-images.githubusercontent.com/1457576/28754998-9de4894e-7551-11e7-8db3-870fa28d0385.png">


All other models are now blank too
<img width="748" alt="capture d ecran 2017-07-30 a 18 00 33" src="https://user-images.githubusercontent.com/1457576/28754995-9ddc7330-7551-11e7-83b5-954c7447c560.png">


CPU is going mad until Chrome/Firefox tab is closed.
<img width="483" alt="capture d ecran 2017-07-30 a 18 01 42" src="https://user-images.githubusercontent.com/1457576/28754994-9dc9c7d0-7551-11e7-973b-6966bf95f493.png">

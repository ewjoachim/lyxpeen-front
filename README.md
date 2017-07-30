Reproducing the bug :

For now, I haven't been able to mock my API so I've exported all my API calls to be easily served by a local server..

```console
# Create a local server on port 8000
$ cd api_calls && python3 -m http.server
```

On another console:
```console
$ ember serve  --proxy=http://127.0.0.1:8000/
```

Then navigate to ``http://localhost:4200/2bc84504-dea0-4dc2-ae18-b49d096ac224``.

Open the Inspector, on the Data tab

When you select "singer-part", its content is blank

All other models are now blank too

CPU is going mad until Chrome/Firefox tab is closed.

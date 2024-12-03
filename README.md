### Error

```
 FAIL  src/lib/repro/repro.component.spec.ts > ReproComponent > should create
Error: The code should be running in the fakeAsync zone to call this function
 ‚ùØ _getFakeAsyncZoneSpec ../../node_modules/zone.js/bundles/zone-testing.umd.js:1827:23
 ‚ùØ Object.tick ../../node_modules/zone.js/bundles/zone-testing.umd.js:1847:9
 ‚ùØ Module.tick ../../../../packages/core/testing/src/fake_async.ts:135:32
 ‚ùØ src/lib/repro/repro.component.spec.ts:8:5
      6|   it('should create', fakeAsync(async () => {
      7|     const component = await render(ReproComponent, {});
      8|     tick(1000);
       |     ^
      9|     expect(component).toBeTruthy();
     10|   }));
```

### How to execute?

```
npx nx test repro
```

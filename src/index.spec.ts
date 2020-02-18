describe("Fake TS test", () => {
  it('Should pass', () => {
    expect(1 + 2).toEqual(3);
  });

  interface ITest {
    a: number;
    s: string;
  }
  it("Should fail", async () => {
    const t: ITest = { a: 1, s: 'ciao' };
    expect(t.s).toContain("ia")
  })
})

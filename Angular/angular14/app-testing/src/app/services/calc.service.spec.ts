import { SharedService } from "../shared/service/shared.service";
import { CalcService } from "./calc.service";

describe("CalcService",()=>{
  it("should Multiply two numbers",()=>{
    const shared=new SharedService();
    const calc= new CalcService(shared);
    const result =calc.multiply(2,4);
    expect(result).toBe(8)
  });
  it("should call the shared service",()=>{
    const shared=jasmine.createSpyObj("sharedService",["printConsole"]);
    // spyOn(shared,"printConsole");
    const calc=new CalcService(shared);
    const result=calc.multiply(2,4);
    expect (shared.printConsole).toHaveBeenCalled()
  })
})
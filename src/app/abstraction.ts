export class BaseSubscriber {
  name: string;
}

export interface IStandard {
  watchStandardContent():void ;
}

export interface IPremium {
  watchPremiumContent():void ;
}
export class PremiumSubscriber extends  BaseSubscriber implements IPremium, IStandard{
  watchPremiumContent(): void {
  }

  watchStandardContent(): void {
  }

}

export class StandardSubscriber extends  BaseSubscriber implements  IStandard{
  watchStandardContent() {

  }
}

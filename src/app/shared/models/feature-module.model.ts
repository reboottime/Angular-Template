export class PageModule {
    title: string;
    path: string;
  
    constructor(args: { title: string; path: string }) {
      const { title, path } = args;
  
      this.title = title;
      this.path = path;
    }
  }
  
  export class FeatureModule extends PageModule {
    icon?: string;
    childModules: PageModule[];
  
    constructor(args: {
      title: string;
      icon?: string;
      path: string;
      childModules: PageModule[];
    }) {
      super({
        title: args.title,
        path: args.path,
      });
  
      const { icon, childModules } = args;
  
      this.icon = icon;
      this.childModules = childModules;
    }
  }
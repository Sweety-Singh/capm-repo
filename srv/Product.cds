using { gwsample } from './external/gwsample';
 
service Product {
 
    entity ProductSet as select from gwsample.ProductSet{
        ProductID,
        Description,
        Name,
        Price, WeightMeasure, WeightUnit
    }
 
}
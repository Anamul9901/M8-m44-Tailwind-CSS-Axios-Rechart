import PriceOpstion from "../PriceOpstion/PriceOpstion";

 
const PriceOptions = () => {

    const PriceOption = [
        {
            "id": 1,
            "name": "Option 1",
            "features": ["Feature A", "Feature B", "Feature C", "Feature D"],
            "price": 99.99
        },
        {
            "id": 2,
            "name": "Option 2",
            "features": ["Feature X", "Feature Y", "Feature Z"],
            "price": 49.99
        },
        {
            "id": 3,
            "name": "Option 3",
            "features": ["Feature P", "Feature Q", "Feature R", "Feature S", "Feature T"],
            "price": 149.99
        },
         
      ];
      
      // You can now access and manipulate the updated PriceOption array with more features.
      
    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 p-6">
            {
                PriceOption.map(opstion => <PriceOpstion key={opstion.id} opstion={opstion}></PriceOpstion>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
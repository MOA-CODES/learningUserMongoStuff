import java.util.ArrayList;

import java.util.*;

public class MANAGE {
    private ArrayList<ITEM> items;
    private double TotalWeight;
    
    public MANAGE() {
        items = new ArrayList<ITEM>();
    }

    public double getTotalWeight(){
        TotalWeight = 0.0;
        for (ITEM item : items){
            TotalWeight += item.getWeight();
        }

        return TotalWeight;
    }

    public void AddItem(ITEM item){
        items.add(item);

        System.out.println("Item Successfully Added");
    }

    public String getItemsString(){
        StringBuilder sb = new StringBuilder();
        int i = 0;
        for (ITEM item : items){
            i = i + 1;
            sb.append(i+" "+item.getDesc()+" owned by: "+item.getsurname());
            sb.append("\n");
        }
        String x = sb.toString();
        

        return x;
    }

    public String RemoveItem(String search){
        for (ITEM item : items){
            if(item.getsurname().equals(search)){
                items.remove(item);

                return "checked out item owned by:"+ search;
            };
          }

          return "no item to check out owned by " + search;
    }

    public String searchItems(String search){
        for (ITEM item : items){
          if(item.getsurname().equals(search)){

            return  "There is a "+ item.getDesc() + " owned by: "+search;
          };
        }

       return "no item in system owned by " + search;
    }
    

    public String report(){
        StringBuilder sb = new StringBuilder();

        sb.append("System Report: \n");
        sb.append("\n");

        sb.append("There is a total of "+items.size()+" items in system the system");
        sb.append("\n");
        sb.append("The total weight in the system is "+ this.getTotalWeight()+"kg");
        sb.append("\n");
        sb.append("\n");
        sb.append("Detailed info on the "+items.size()+" owners of items in the system");
        sb.append("\n");
        sb.append("\n");


        int i = 0;
        for (ITEM item : items){
            i = i + 1;
            sb.append(i+" "+item.getDesc()+" is owned by: "+item.getsurname()+ "\nits weight is: "+item.getWeight()+
            "kg and its tag is:"+item.getTag());
            sb.append("\n");
            sb.append("\n");


        }

        sb.append("That concludes the report");


        String x = sb.toString();

        return x;
    }

}

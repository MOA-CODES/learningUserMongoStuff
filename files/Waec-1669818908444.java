import java.util.Scanner;
import java.io.IOException;

public class MAIN {
    public static MANAGE m = new MANAGE();

    public static void main(String[] args) throws IOException, ClassNotFoundException {

        ITEM lug1 = new ITEM("riman",40.00,"Tag0","ball box");
        m.AddItem(lug1);

        ITEM lug2 = new ITEM("innocent",45.00,"Tag1","black box");
        m.AddItem(lug2);

        ITEM lug3 = new ITEM("Moyo",19.00,"Tag2","blue box");
        m.AddItem(lug3);

        event();
    }

    public static void event(){
        System.out.println("----------------------------------------------\n"+
                            "1) Check-in an item\n"+
                            "2) Check-out an item\n"+
                            "3) List all items currently on the system\n"+
                            "4) Search for an item by owner surname\n"+
                            "5) print Report"+
                            "\n6) Exit from the system\n"+
                           "----------------------------------------------");


        Scanner in = new Scanner(System.in);
        int gin = in.nextInt();


        if(gin == 1){
            ITEM x = new ITEM();

            System.out.println("Enter the owner of the item you want to check-in");
            String owner = in.next();
            x.setsurname(owner);

            System.out.println("Enter the weight of the item you want to check-in");
            Double weight = in.nextDouble();
            x.setWeight(weight);

            System.out.println("Enter the Tag of the item you want to check-in");
            String Tag = in.next();
            x.setTag(Tag);

            System.out.println("Enter the Description of the item you want to check-in");
            String Desc = in.next();
            x.setDesc(Desc);
            m.AddItem(x);

            event();
        }else if(gin == 2){
            System.out.println("input items owner surname to check out:");
            String gin2 = in.next();

            System.out.println(m.RemoveItem(gin2));
            event();
        }else if(gin == 3){
            // System.out.println(m.ListItems());
            System.out.println(m.getItemsString());
            event();
        }else if(gin == 4){
            System.out.println("input surname to Search by:");
            String gin2 = in.next();

            System.out.println(m.searchItems(gin2));
            event();
        }else if(gin == 5){
            System.out.println(m.report());
            event();
        }else if(gin == 6){
            System.exit(0);
        }else{
            System.out.println("not a valid option");
            event();
        }

        in.close();
    }

}

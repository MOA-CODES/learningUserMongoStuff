public class ITEM {
    private String surname;
    private Double weight;
    private String Tag;
    private String desc;

    public ITEM(){

    }
    public ITEM(String surname, Double weight, String Tag, String desc) {
        this.surname = surname;
        this.weight = weight;
        this.Tag = Tag;
        this.desc = desc;
    }

    public void setsurname(String surname) {
        this.surname = surname;
    }
    public String getsurname() {
        return this.surname;
    }   

    public void setWeight(Double weight) {
        this.weight = weight;
    }
    public Double getWeight() {
        return this.weight;
    }

    public void setTag(String Tag) {
        this.Tag = Tag;
    }
    public String getTag() {
        return this.Tag;
    }
    
    public void setDesc(String desc) {
        this.desc = desc;
    }
    public String getDesc() {
        return this.desc;
    }
}

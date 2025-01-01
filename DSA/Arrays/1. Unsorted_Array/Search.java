public class Search {

    public static void main(String[] args) {
        int[] input = {1,20,3,4,52,6,79};
        int toFind = 52;
        System.out.println("Element at: "+ findElement(input, toFind));
    }

    public static int findElement(int[] arr, int element){
        int len = arr.length;
        for(int i=0; i<len; i++){
            if (arr[i] == element) {
                return i;
            }
        }
        return -1;
    }
}

public class InsertInPlace {
    public static void main(String[] args) {

        int[] arr = { 1, 2, 4, 5, 6, 0 };
        insertAt(arr, 2, 3);

        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

    }

    // Assuming 0 means empty space
    public static int insertAt(int[] arr, int pos, int ele) {
        // [1,2,4,5,6,0]
        if (arr[arr.length - 1] != 0) {
            return -1;
        }
        for (int i = arr.length - 1; i >= pos; i--) {

            if(i == arr.length -1){
                continue;
            }
            arr[i + 1] = arr[i];

        }
        arr[pos] = ele;
        return 0;
    }
}

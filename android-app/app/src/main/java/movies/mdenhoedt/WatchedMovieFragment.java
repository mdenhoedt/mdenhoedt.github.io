package movies.mdenhoedt;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ListAdapter;
import android.widget.ListView;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class WatchedMovieFragment extends TitledFragment {
    View rootView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        rootView = inflater.inflate(R.layout.fragment_watched_movie, container, false);
        ListView listView = (ListView) rootView.findViewById(R.id.listview);

        List<String> list = Arrays.asList(
                new String[]{"Movie 1 (2013)", "Movie 2 (2013)", "Movie 3 (2013)", "Movie 4 (2013)",
                        "Movie 5 (2013)", "Movie 6 (2013)", "Movie 7 (2013)", "Movie 8 (2013)",
                        "Movie 9 (2013)"}
        );

        final ListViewAdapter adapter = new ListViewAdapter(rootView.getContext(), android.R.layout.simple_list_item_1, list);
        listView.setAdapter(adapter);
        return rootView;
    }

    @Override
    public CharSequence getTitle() {
        return "Watched";
    }


    private class ListViewAdapter extends ArrayAdapter<String> {
        HashMap<String, Integer> map = new HashMap<>();

        public ListViewAdapter(Context context, int resource, List<String> objects) {
            super(context, resource, objects);
            for (int i = 0; i < objects.size(); i++) {
                map.put(objects.get(i), i);
            }
        }

        @Override
        public long getItemId(int position) {
            String item = getItem(position);
            return map.get(item);
        }

        @Override
        public boolean hasStableIds() {
            return true;
        }
    }
}

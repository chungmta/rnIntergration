package com.rnwithnative;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentStatePagerAdapter;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;
import android.widget.Toast;

import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.rnwithnative.ui.ViewPagerAdapter;

public class MainNativeActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {
    private BottomNavigationView mNavigationView;
    private ViewPager mViewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_native);

        mNavigationView = findViewById(R.id.bottom_nav);
        mViewPager = findViewById(R.id.view_pager);

        setupViewPager();

        mNavigationView.setOnItemSelectedListener(item -> {
            switch (item.getItemId()) {
                case R.id.action_home:
                    Toast.makeText(MainNativeActivity.this, "Home", Toast.LENGTH_SHORT).show();
                    mViewPager.setCurrentItem(0);
                    break;
                case R.id.action_favorite:
                    Toast.makeText(MainNativeActivity.this, "Favorite", Toast.LENGTH_SHORT).show();
                    mViewPager.setCurrentItem(1);
                    break;
                case R.id.action_my_page:
                    Toast.makeText(MainNativeActivity.this, "My Page", Toast.LENGTH_SHORT).show();
                    mViewPager.setCurrentItem(2);
                    break;

            }
            return false;
        });
    }

    private void setupViewPager() {
        ViewPagerAdapter viewPagerAdapter = new ViewPagerAdapter(
                getSupportFragmentManager(),
                FragmentStatePagerAdapter.BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT);
        mViewPager.setAdapter(viewPagerAdapter);

        mViewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {

            }

            //khi chuyen page trong viewpager
            @Override
            public void onPageSelected(int position) {
                switch (position) {
                    case 0:
                        mNavigationView.getMenu().findItem(R.id.action_home).setChecked(true);
                        break;
                    case 1:
                        mNavigationView.getMenu().findItem(R.id.action_favorite).setChecked(true);
                        break;
                    case 2:
                        mNavigationView.getMenu().findItem(R.id.action_my_page).setChecked(true);
                        break;
                }
            }

            @Override
            public void onPageScrollStateChanged(int state) {

            }
        });
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }
}
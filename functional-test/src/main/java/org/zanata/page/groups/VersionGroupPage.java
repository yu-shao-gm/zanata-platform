package org.zanata.page.groups;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.FluentWait;
import org.zanata.page.AbstractPage;
import org.zanata.util.TableRow;
import org.zanata.util.WebElementUtil;
import com.google.common.base.Function;
import com.google.common.base.Preconditions;

import lombok.extern.slf4j.Slf4j;

/**
 * @author Patrick Huang <a href="mailto:pahuang@redhat.com">pahuang@redhat.com</a>
 */
@Slf4j
public class VersionGroupPage extends AbstractPage
{
   public static final int PROJECT_NAME_COLUMN = 0;
   @FindBy(linkText = "Add Project Versions")
   private WebElement addProjectVersionsLink;

   @FindBy(id = "versionAddPanelContentDiv")
   private WebElement addProjectVersionPanel;

   @FindBy(xpath = "//table[contains(@id, 'iterationsDataTable')]")
   private WebElement groupDataTable;

   public VersionGroupPage(final WebDriver driver)
   {
      super(driver);
   }

   public VersionGroupPage addProjectVersion()
   {
      addProjectVersionsLink.click();
      return this;
   }

   public List<TableRow> searchProject(final String projectName)
   {
      WebElement searchField = waitForTenSec().until(new Function<WebDriver, WebElement>()
      {
         @Override
         public WebElement apply(WebDriver driver)
         {
            return addProjectVersionPanel.findElement(By.xpath(".//input[contains(@name, 'projectVersionSearch') and @type='text']"));
         }
      });

      searchField.sendKeys(projectName);
      WebElement searchButton = addProjectVersionPanel.findElement(By.xpath(".//input[contains(@id, 'searchBtn')]"));
      searchButton.click();

      WebElement searchResultTable = waitForTenSec().until(new Function<WebDriver, WebElement>()
      {
         @Override
         public WebElement apply(WebDriver driver)
         {
            WebElement table = addProjectVersionPanel.findElement(By.xpath(".//table[contains(@id, ':resultTable')]"));
            List<TableRow> tableRows = WebElementUtil.getTableRows(table);
            //we want to wait until search result comes back
            if (tableRows.isEmpty() || !tableRows.get(0).getCellContents().get(0).contains(projectName))
            {
               log.debug("waiting for search result refresh...");
               return null;
            }
            return table;
         }
      });

      return WebElementUtil.getTableRows(searchResultTable);
   }

   public VersionGroupPage addToGroup(TableRow projectVersionRow)
   {
      List<WebElement> cells = projectVersionRow.getCells();
      int selectVersionIndex = cells.size() - 1;
      WebElement selectCheckBox = cells.get(selectVersionIndex).findElement(By.xpath(".//input[@type='checkbox']"));
      if (!selectCheckBox.isSelected())
      {
         selectCheckBox.click();
      }

      WebElement addSelected = addProjectVersionPanel.findElement(By.xpath(".//input[@value='Add Selected']"));
      addSelected.click();
      return this;
   }

   public VersionGroupPage closeSearchResult()
   {
      WebElement closeButton = addProjectVersionPanel.findElement(By.xpath(".//input[@value='Close']"));
      closeButton.click();
      return this;
   }

   public List<List<String>> getProjectVersionsInGroup()
   {
      List<TableRow> tableRows = WebElementUtil.getTableRows(groupDataTable);
      return WebElementUtil.transformToTwoDimensionList(tableRows);
   }

   public List<List<String>> getNotEmptyProjectVersionsInGroup()
   {
      FluentWait<WebDriver> fluentWait = waitForTenSec();
      fluentWait.ignoring(IllegalStateException.class);
      List<TableRow> tableRows = fluentWait.until(new Function<WebDriver, List<TableRow>>()
      {
         @Override
         public List<TableRow> apply(WebDriver driver)
         {
            final List<TableRow> tableRows = WebElementUtil.getTableRows(groupDataTable);

            log.info("{} project versions for this group", tableRows.size());
            Preconditions.checkState(tableRows.size() > 0, "table is empty");
            return tableRows;
         }
      });

      return WebElementUtil.transformToTwoDimensionList(tableRows);
   }

}